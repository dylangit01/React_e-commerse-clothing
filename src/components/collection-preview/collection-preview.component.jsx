import React from "react";
import './collection-preview.styles.scss'
import CollectionItem from "../collection-item/collection-item.component";

export const CollectionPreview = ({items, title}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                // display only four items:
                items
                    .filter((item, idx) => idx < 4)
                    .map(({id, ...otherItemProps}) => (
                        <CollectionItem key={id} {...otherItemProps}/>
                        // <div key={item.id}>{item.name}</div>
                    ))
            }
        </div>
    </div>
);

