
import React from 'react';

class ShoppingCartItem extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render(){
        return (
                      <div className="row">
                        <div className="col-xs-2">
                            <img alt="#" className="img-responsive" src={ this.props.data.Url }/>
                        </div>

                        <div className="col-xs-4">
                            <h4 className="product-name">
                                <strong>{ this.props.data.Name }</strong>
                            </h4>
                        </div>

                        <div className="col-xs-6">
                            <div className="col-xs-6 text-right">
                                <h6>
                                    <strong>
                                        { this.props.data.Price } <span className="text-muted">x</span>
                                    </strong>
                                </h6>
                            </div>

                            <div className="col-xs-4">
                                <input type="number" className="form-control input-sm" value={ this.props.data.Qty } /*onChange={this.handleChnage.bind(this)}*//>
                            </div>

                            <div className="col-xs-2">
                                <button type="button" className="btn btn-link btn-xs">
                                    <span className="glyphicon glyphicon-trash"> </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    )
     

    }
    //畫面互動
    // handleChnage(event)
    // {
    //     this.props.onChange(event.target.value);
    // }






}

export default ShoppingCartItem;
