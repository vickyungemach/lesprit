import React from 'react';
import Searchbar from 'components/elements/Searchbar';
import Card from 'components/elements/Card';
import Button from 'components/elements/Button';

/* Props
=================================================== */
// openForm: Function
// count: Number 


function VocabularyPanel({ openForm, count }) {

    return (
        <Card type="panel" radius="medium">
            <div className="panel-card_group">
                <h1 className="panel-card_group--title">{ count } Words</h1>
                <Button id="add-list-btn" type="transparent" onClick={openForm}><p>+</p> Add new list</Button>
            </div>
            <Searchbar />
        </Card>
    )
}

export default VocabularyPanel;
 