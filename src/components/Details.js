import React from 'react';
import './Details.scss';
const Details = (props) => {
    const {address, pin, state, price, beds, baths, desc} = props.home;
    return (
        <div className="Details">
            <div className="detailsDiv">
                <div className="price">
                    <span>$</span>{price}
                </div>
                <div className="otherDetails">
                    <div className="givenDetails">
                        <p className="address">{address},</p>
                        <p className="state-pin">{state} - {pin}</p>
                        <p>Beds <em>-</em> {beds},</p>
                        <p>Baths <em>-</em> {baths}</p>
                    </div>
                    <div className="description">
                        <p>{desc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;
