//api calling with async await
const getDetails = async () => {
  //request data gathering logic
  let userid = document.getElementById("userid").value;
  let para = document.getElementById("simple");
  let result = document.getElementById("sample");
  para.style.display = "block";
  // validate logic
  if(userid==""){
    alert("please enter userid..");
    return;
  }
  //business logic
  try{
  
    const [userresult, postresult] = await Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/users/${userid}`),
      fetch(`https://jsonplaceholder.typicode.com/posts/?userId${userid}`),
    ]);//?-->query string to bind
    const userdata = await userresult.json();
    const postdata = await postresult.json();
    result.innerHTML = `
        <h2>${userdata.name}</h2>
        <p>${userdata.email}</p>;
        <h2>posts:</h2>
        <u1>
        ${postdata.map((item) =>`<li>${item.title}</li>`)}
        </u1>

        
  } catch (err) {
    result.innerHTML = "<h3>Something went wrong....</h3>";
  }
  }
  }
