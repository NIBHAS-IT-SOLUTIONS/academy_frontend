import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Exam.css'


function Exam() {
    const [examdata, setexamdata] = useState()
    const [apiurl, setapiurl] = useState('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
    const [selectedOption,onSelectOption]=useState(true)

    const fetchdata = async () => {

        var response = await axios.get(apiurl)
        console.log(response.data.results);
        const data = Object.values(response.data.results);
        console.log(data);
        setexamdata(data)

    }

    useEffect(() => {
        //fetchdata()
    }, [apiurl]);
    //https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple
    const examdatas = [
        {
            "title": "JavaScript Basics",
            "questions": [
                {
                    "text": "What is the correct syntax to print a message in the console in JavaScript?",
                    "options": [
                        "console.print('Hello World');",
                        "console.log('Hello World');",
                        "print('Hello World');",
                        "log.console('Hello World');"
                    ],
                    "correctOption": "console.log('Hello World');"
                },
                {
                    "text": "Which data type is used to create a variable that should store text?",
                    "options": [
                        "String",
                        "Int",
                        "Float",
                        "Boolean"
                    ],
                    "correctOption": "String"
                },
                {
                    "text": "How do you create a function in JavaScript?",
                    "options": [
                        "function = myFunction()",
                        "function myFunction()",
                        "function:myFunction()",
                        "create.myFunction()"
                    ],
                    "correctOption": "function myFunction()"
                }
            ]
        },
        {
            "title": "React Fundamentals",
            "questions": [
                {
                    "text": "What is the purpose of React?",
                    "options": [
                        "To create server-side applications",
                        "To create user interfaces",
                        "To perform data analysis",
                        "To handle database management"
                    ],
                    "correctOption": "To create user interfaces"
                },
                {
                    "text": "Which method is used to render components in React?",
                    "options": [
                        "ReactDOM.render()",
                        "React.render()",
                        "render.Component()",
                        "Component.render()"
                    ],
                    "correctOption": "ReactDOM.render()"
                },
                {
                    "text": "How do you create a component in React?",
                    "options": [
                        "function Component() {}",
                        "class Component extends React.Component {}",
                        "const Component = () => {}",
                        "All of the above"
                    ],
                    "correctOption": "All of the above"
                }
            ]
        },
        {
            "title": "Python Basics",
            "questions": [
                {
                    "text": "What is the correct file extension for Python files?",
                    "options": [
                        ".pyth",
                        ".pt",
                        ".py",
                        ".pyt"
                    ],
                    "correctOption": ".py"
                },
                {
                    "text": "How do you create a variable with the numeric value 5?",
                    "options": [
                        "x = 5",
                        "x == 5",
                        "x : 5",
                        "x -> 5"
                    ],
                    "correctOption": "x = 5"
                },
                {
                    "text": "Which keyword is used to define a function in Python?",
                    "options": [
                        "function",
                        "def",
                        "fun",
                        "define"
                    ],
                    "correctOption": "def"
                }
            ]
        }
    ]

    return (
        <>
            <div>Exam</div>
            {
                examdatas.map((exams) => {
                    return (
                        <>

                            <Link to='#'>{exams.title}</Link>
                            <br />
                            <div className="question-container">

                              {
                                exams.questions.map((ques)=>{
                                    return(
                                        <>
                                        <h2 className="question-text">{ques.text}</h2>
                                        <ul className="option-list">
                                        {
                                            ques.options.map((opt,index)=>{
                                                return(
                                                    <li
                                                    key={index}
                                                    className={`option-item ${selectedOption === index ? 'selected' : ''}`}
                                                    onClick={() => onSelectOption(index)}                                                
                                                  >
                                                    {opt}
                                                  </li>
                                                )
                                            })
                                        }
                                        
                                        </ul>
                                        </>
                                    )
                                })
                              }

                            </div>

                        </>
                    )
                })
            }

        </>
    )

}

export default Exam

