import {useState} from 'react'

export const InputForm = ({taskList,setTaskList}) => {

    const [inputText, setInputText] = useState("")
    

    const handleSubmit= (e)=>{
       e.preventDefault();
       /*タスクを追加する*/
       setTaskList([
        ...taskList,
        {
            id:taskList.length,
            text: inputText,
            completed: false
        }
       ]);
       /*タスクを消す*/
       setInputText("")
    }

    /*submitボタン*/ 
    const handleChange= (e) =>{
        setInputText(e.target.value);
    }
  return (
    <div className="inputForm">
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={inputText} />
            <button>
                <i class="fa-solid fa-plus"></i>
            </button>
        </form>

    </div>
  )
}
