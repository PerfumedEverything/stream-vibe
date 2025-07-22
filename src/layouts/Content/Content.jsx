import './Content.scss'
import classNames from "classnames";

const Content = (props) => {
  const {
    children,
    isResetPadiingTop = false,
  } = props

  return (
    <main
      className={classNames('content', {
        'content--reset-padding-top': isResetPadiingTop
      })}
    >
      {children}
    </main>
  )
}

export default Content