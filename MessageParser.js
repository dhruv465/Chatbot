// MessageParser starter code
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      console.log(message)
      const lowercase = message.toLowerCase();

      if (lowercase.includes('hello') || lowercase.includes('hi')){
        this.actionProvider.greet();
      }else if(message.includes('how are you')){
        this.actionProvider.greet1();
      }else if(message.includes('')){
        this.actionProvider.greet();
      }
    }
  }
  
  export default MessageParser;