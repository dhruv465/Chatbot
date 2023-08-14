

// ActionProvider starter code
class ActionProvider {
    constructor(
        createChatBotMessage,
        setStateFunc,
    ) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;     
    }

    greet = () => {
const message =this.createChatBotMessage("Hi, Sorry for this inconvenience, I'm currently in devlopment mode.. If there is any query please contact on 8806931555 or Email on hr@niriglobal.com");
 this.addMessageToState(message);
    };
    greet1 = () => {
        const message =this.createChatBotMessage("I'm just a bot, but thanks for asking!");
         this.addMessageToState(message);
            };

    addMessageToState = (message) => {
        this.setState(prevState => ({
            ...prevState,
            messages: [...prevState.messages, message],
        }));
    };
}

export default ActionProvider;