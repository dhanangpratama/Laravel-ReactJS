import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {
    constructor () {
        super()
    
    }

    componentDidMount() {
        // console.log(this.el);
        // this.$el = $(this.el)
        
        $('#users-table').DataTable(
            {
                initComplete : function() {
                    let input = $('.dataTables_filter input'),
                        self = this.api();
    
                    input.unbind();
                    input.bind('keyup input', function(e) {
                        if(e.keyCode == 8 && !input.val() || e.keyCode == 46 && !input.val()) {
                            // do nothing here
                        } else if(e.keyCode == 13 || !input.val()) {
                            self.search(this.value).draw();
                        }
                    }); 
    
                    $('#users-table').removeClass('invisible');
                    
                },  
                processing: true,
                serverSide: true,
                stateSave: true,
                stateDuration: -1,
                ajax: 'ajax/users',
                columns: [
                    { data: "name", defaultContent: "-" },
                    { data: "email", defaultContent: "-" },
                    { data: "created_at", defaultContent: "-" }
                ],
                order: [[2, 'desc']]
            }
        )
    }

    render () {
    
        return (
            <div className='container-fluid py-4'>
                <table id="users-table" width="100%" className="table table-bordered table-hover middle invisible" ref={el => this.el = el}>
                    <thead className="thead-dark">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Created At</th>
                        </tr>
                    </thead>
                    <tfoot className="thead-dark">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Created At</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}

const mapReduxStateToComponentProps = state => ({
    app: state.app
});

export default connect(
    mapReduxStateToComponentProps, 
    null
)(Users);