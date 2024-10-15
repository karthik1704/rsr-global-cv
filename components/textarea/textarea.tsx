export const textHandleChange =(event) =>{
    const input = event.target.value

const words = input.split(' ');

if(words.length > 0){
    words[0] = words[0].charAt(0).toUpperCase()+ words[0].slice(1);
}
event.target.value = words.join(' ');
}