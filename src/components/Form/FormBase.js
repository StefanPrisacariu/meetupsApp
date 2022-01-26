import Form from "./Form";

function FormBase(){
    function addPostHandler(postData){
        fetch("https://cosplaybyheart-default-rtdb.firebaseio.com/posts.json",{
            method: "POST",
            body: JSON.stringify(postData),
            headers:{
                'ContentType':'application/json',
            },
        }).then(()=>{
            alert('Post Created');
        });
    }
    return(
        <section>
            <Form onAddPost={addPostHandler} />
        </section>
    )
}

export default FormBase;