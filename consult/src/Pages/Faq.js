import React from 'react';

//components
import AccordionItem from './AccordionItem';

const DropData  = [
    {
        title: 'LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING ?',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
    },
    {
        title: 'READABLE CONTENT OF A PAGE WHEN LOOKING AT ITS LAYOUT?',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
    },
    {
        title: 'SUSPENDISSE MATTIS LEO NON NEQUE BIBENDUM SEMPER ?',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
    },
    {
        title:'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT?',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
    },
    {
        title: 'MAURIS DICTUM PURUS AC DUI EFFICITUR, SED INTERDUM LIGULA BLANDIT ?',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
    },
    {
        title: 'PHASELLUS EGET ERAT ALIQUET, EGESTAS ODIO EGET, LAOREET AUGUE ?',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
    },
    {
        title: 'CRAS PHARETRA VELIT EU PRETIUM VIVERRA. ?',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
    },
];

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