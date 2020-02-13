import TestComp from './components/TestComp'

const CommentBox = () => {
  return (
    <div>
      hello1
      <TestComp></TestComp>
    </div>
  )
}

ReactDOM.render(<CommentBox />, document.getElementById('container'))
