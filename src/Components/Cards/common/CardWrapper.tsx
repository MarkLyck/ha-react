import { Alert } from 'antd'
import { ErrorBoundary } from 'react-error-boundary'

const CardWrapper = (Component: any) => (props: any) => {
  const entity = props.hass.states[props.entityId]
  if (!props.entityId) {
    return <Alert message="Missing entityId" type="error" showIcon />
  }
  if (!entity) {
    return (
      <Alert
        message={`Entity with id "${props.entityId}" not found`}
        type="error"
        showIcon
      />
    )
  }

  return (
    <ErrorBoundary
      fallback={
        <Alert message={'Something went wrong'} type="error" showIcon />
      }
    >
      <Component {...props} />
    </ErrorBoundary>
  )
}

export default CardWrapper
