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
                    // .map(({id, ...otherItemProps}) => (
                    //     <CollectionItem key={id} {...otherItemProps}/>

                    // Because of Redux, we simply passed the whole item in below item = {item}
                    .map(item => (
                        <CollectionItem key={item.id} item={item}/>
                    ))
            }
        </div>
    </div>
);

