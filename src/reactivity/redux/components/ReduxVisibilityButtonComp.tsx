function ReduxVisibilityButtonComp(props: { pageTitle: string; onClick: any }) {
  return <button onClick={props.onClick}> {props.pageTitle} </button>
}

export default ReduxVisibilityButtonComp
