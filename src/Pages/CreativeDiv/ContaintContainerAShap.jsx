/* eslint-disable react/prop-types */

export default function ContaintContainerAShap({style}) {
  console.log(style.container)
  return (
    <div style={style.c}>
        <div style={style.container}>
            hello
        </div>
    </div>
  )
}
