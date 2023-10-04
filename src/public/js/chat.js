document.getElementById('username-form').addEventListener('submit', async(e) => {
e.preventDefault();
const userInputElement = document.getElementById('username');
const messageInputElement = document.getElementById('message');

const user = userInputElement.value;
const message = messageInputElement.value;

try {
const response = await fetch('api/msg',{
    method: "POST",
    headers:{
        'Content-Type' : 'application/json',
    },
    body: JSON.stringify({ user, message}),
})
if(response.ok){
    const responseData = await response.json();
    const successMessage = responseData.message;
} else {
    console.error('error al enviar el mensaje');
}
}catch (error){
    console.log('error de red',error);
}
});