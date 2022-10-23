const numberHandler={};

numberHandler.addNumbers = async(event)=>{
    const body = JSON.parse(event.body)
    console.log(body);
}