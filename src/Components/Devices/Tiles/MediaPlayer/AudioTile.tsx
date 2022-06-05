import { useState } from 'react'
import { Slider } from 'antd'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AccessoryCard } from 'src/Components/Devices/Tiles/common/AccessoryCard'
import Icon from 'src/assets/icons/devices/homepod.svg'
import useStore from 'src/lib/useStore'

import {
  ActionsContainer,
  ActionButton,
} from 'src/Components/Devices/Tiles/common/Actions'

const SliderContainer = styled.div`
  width: 100%;
  padding: 0 4px;
  .ant-slider-rail {
    background-color: ${(p) => p.theme.colors.neutral[500]};
  }
  .ant-slider-track {
    background-color: ${(p) => p.theme.colors.primary[600]};
  }
  .ant-slider-handle {
    background-color: ${(p) => p.theme.colors.neutral[100]};
    border-color: ${(p) => p.theme.colors.primary[600]};
  }
  &&:hover {
    .ant-slider-rail {
      background-color: ${(p) => p.theme.colors.neutral[500]};
    }
    .ant-slider-track {
      background-color: ${(p) => p.theme.colors.primary[600]};
    }
    .ant-slider-handle {
      background-color: ${(p) => p.theme.colors.neutral[100]};
      border-color: ${(p) => p.theme.colors.primary[600]};
    }
  }
`

const AudioTile = ({ entity }: any) => {
  const [isChangingVolume, setIsChangingVolume] = useState(false)
  const [volume, setVolume] = useState(entity.attributes.volume_level * 100)
  const { sendSocket } = useStore()
  const INACTIVE_STATES = ['off', 'idle', 'paused']
  const isActive = !INACTIVE_STATES.includes(entity.state)

  const { friendly_name } = entity.attributes

  const handlePlay = () => {
    sendSocket({
      domain: 'media_player',
      service: 'media_play',
      service_data: { entity_id: entity.entity_id },
      type: 'call_service',
    })
  }
  const handleSkip = () => {
    sendSocket({
      domain: 'media_player',
      service: 'media_next_track',
      service_data: { entity_id: entity.entity_id },
      type: 'call_service',
    })
  }
  const onPress = async () => {
    if (!isActive) {
      handlePlay()
    } else {
      sendSocket({
        domain: 'media_player',
        service: 'media_stop',
        service_data: { entity_id: entity.entity_id },
        type: 'call_service',
      })
    }
  }

  const handlePause = () => {
    sendSocket({
      domain: 'media_player',
      service: 'media_pause',
      service_data: { entity_id: entity.entity_id },
      type: 'call_service',
    })
  }

  const handleSetVolume = (volumeLevel: number) => {
    setVolume(volumeLevel)
    sendSocket({
      domain: 'media_player',
      service: 'volume_set',
      service_data: {
        entity_id: entity.entity_id,
        volume_level: volumeLevel / 100,
      },
      type: 'call_service',
    })
  }

  const resetVolumeControlState = () => {
    window.setTimeout(() => {
      setIsChangingVolume(false)
    }, 200)
  }

  let state = entity.state
  if (state === 'playing') {
    state = entity.attributes.media_title
  }

  let volumeIcon = 'volume-xmark'
  if (volume > 0) volumeIcon = 'volume-low'
  if (volume > 40) volumeIcon = 'volume'
  if (volume > 60) volumeIcon = 'volume-high'

  return (
    <AccessoryCard
      iconActive={<Icon />}
      iconInactive={<Icon />}
      onPress={onPress}
      name={friendly_name}
      isActive={isActive}
      state={state}
    >
      {isActive && (
        <>
          {!isChangingVolume && (
            <ActionsContainer>
              <ActionButton onClick={() => setIsChangingVolume(true)}>
                {/* @ts-ignore */}
                <FontAwesomeIcon icon={['fas', volumeIcon]} />
              </ActionButton>

              {entity.state === 'playing' && (
                <ActionButton onClick={handlePause}>
                  <FontAwesomeIcon icon={['fas', 'pause']} />
                </ActionButton>
              )}
              {entity.state === 'paused' && (
                <ActionButton onClick={handlePlay}>
                  <FontAwesomeIcon icon={['fas', 'play']} />
                </ActionButton>
              )}
              <ActionButton onClick={handleSkip}>
                <FontAwesomeIcon icon={['fas', 'forward']} />
              </ActionButton>
            </ActionsContainer>
          )}
          {isChangingVolume && (
            <SliderContainer
              onMouseUp={resetVolumeControlState}
              onTouchEnd={resetVolumeControlState}
            >
              <Slider
                autoFocus
                onChange={handleSetVolume}
                value={volume}
                min={0}
                max={100}
              />
            </SliderContainer>
          )}
        </>
      )}
    </AccessoryCard>
  )
}

export default AudioTile
