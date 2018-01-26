import React from 'react';

//components
import AccordionItem from './AccordionItem';

const DropData  = {
        title: ['LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING ?','READABLE CONTENT OF A PAGE WHEN LOOKING AT ITS' +
        ' LAYOUT ?','SUSPENDISSE MATTIS LEO NON NEQUE BIBENDUM SEMPER ?','LOREM IPSUM DOLOR SIT AMET, CONSECTETUR' +
        ' ADIPISCING ELIT ?','MAURIS DICTUM PURUS AC DUI EFFICITUR, SED INTERDUM LIGULA BLANDIT ?','PHASELLUS EGET ERAT ALIQUET, EGESTAS ODIO EGET, LAOREET AUGUE ?','CRAS PHARETRA VELIT EU PRETIUM VIVERRA. ?'],
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'

};

class Faq extends  React.Component {
    constructor(props) {
        super(props);

    }

    render() {
            return (
                <section className="faq">
                    <div className="wrapper">
                        <h2>frequently asked questions</h2>
                        <ul className="question-list">
                            <AccordionItem data={ DropData } />
                            <AccordionItem data={ DropData } />
                            <AccordionItem data={ DropData } />
                            <AccordionItem data={ DropData } />
                            <AccordionItem data={ DropData } />
                            <AccordionItem data={ DropData } />
                            <AccordionItem data={ DropData } />
                        </ul>
                    </div>
                </section>
            )
        }
    }


export default Faq;