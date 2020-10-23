import React, { Component } from 'react';
import Item from './Item';
import $ from 'jquery';
var currentdate = new Date();
var datetime = currentdate.getDate() + "/"
    + (currentdate.getMonth() + 1) + "/"
    + currentdate.getFullYear() + " at "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":"
    + currentdate.getSeconds();
    
class TableMovie extends Component {
    createTable ()
    {
        $('card').each(function (index, value) {
            $(this).find('input:checkbox:first').attr('checked', 'checked');
          });
    }
    render() {
        return(<div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Movie name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </table>
        </div>)
    }
}
class Modal extends Component {
    render() {
        return (
            <div className="mt-5">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Proceed to checkout
          </button>
                <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Your orders</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body ">
                                <h4 align="left">Date : {datetime}</h4>
                                <h4 align="left">StudentID : {this.props.studentId}</h4>
                                <h4 align="left">Full name : {this.props.fullName}</h4>
                                <TableMovie></TableMovie>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}    
export default Modal;