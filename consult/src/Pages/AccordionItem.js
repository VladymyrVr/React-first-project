import React from 'react';

class AccordionItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            DropOff: false,
        };
    }
        handleClick = () => {
            this.setState({
                DropOff: !this.state.DropOff
            });
        };


        render() {
            let DropContent;
            if (this.state.DropOff) {
                DropContent = (<p className="hidden">{this.props.data.content}</p>)
                }

            return (
                <li onClick={this.handleClick}>
                    <div  className="question-block">
                        <p className={this.state.DropOff ? 'question open' : 'question '}>{this.props.data.title}</p
                        >
                        {DropContent}
                    </div>
                </li>
            )
        };
}


export default AccordionItem;