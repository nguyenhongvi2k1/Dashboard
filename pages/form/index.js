import {useRef, useState} from "react";

function Index(){
    const [feedbackItems, setFeedbackItems] = useState([]);

    const usernameInputRef = useRef();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    function submitFormHandler(event) {
        event.preventDefault();

        const enteredUsername = usernameInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        const reqBody = {username: enteredUsername, email: enteredEmail, password: enteredPassword };

        fetch('/api/feedback', {
            method: 'POST',
            body: JSON.stringify(reqBody),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
    }

    function loadFeedbackHandler() {
        fetch('/api/feedback')
            .then((response) => response.json())
            .then((data) => {
                setFeedbackItems(data.feedback);
            });
    }

    return (
        <div>
            <div>
                <h1>The Home Page</h1>
            </div>
            <div>
                <form onSubmit={submitFormHandler} >
                    <div>
                        <label htmlFor="username">Username</label>
                        <div>
                            <input type="text" id="username" ref={usernameInputRef} />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <div>
                            <input type="email" id="email" ref={emailInputRef}/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <div>
                            <input type="password" id="password" ref={passwordInputRef}/>
                        </div>
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
            <hr/>
            <button onClick={loadFeedbackHandler}>Load Data</button>
            <ul>
                {feedbackItems.map((item) => (
                    <li key={item.id}>{item.username} - {item.email}</li>

                ))}
            </ul>
        </div>
    )
}
export default Index;