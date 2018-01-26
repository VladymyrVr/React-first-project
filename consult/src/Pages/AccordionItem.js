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
            console.log(this.state.DropOff);
            let DropContent;
            if (this.state.DropOff) {
                DropContent = (<p className="hidden">{this.props.data.content}</p>)
                }

            return (
                <li onClick={this.handleClick}>
                    <div  className="question-block">
                        {this.props.data.title.map((item, index) =>{
                            return (
                                <p className="question" key={index}>{item}</p>
                            )
                        })
                        }
                        {DropContent}
                    </div>
                </li>
            )
        }
}


export default AccordionItem;