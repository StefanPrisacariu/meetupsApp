import Form from "./Form";

function FormBase() {

  // function addPostHandler(postData, resetInputField) {
  //   fetch("https://cosplaybyheart-default-rtdb.firebaseio.com/posts.json", {
  //     method: "POST",
  //     body: JSON.stringify(postData),
  //     headers: {
  //       ContentType: "application/json",
  //     },
  //   })
  //     .then(() => {
  //       alert("Post Created");
  //       postsContext.posts.concat(postData);
  //     })
  //     .then(() => {
  //       resetInputField("");
  //     });
  // }
  return (
    <section>
      <Form/>
    </section>
  );
}

export default FormBase;
