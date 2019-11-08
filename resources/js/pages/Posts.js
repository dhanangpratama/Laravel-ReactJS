import React, { Component } from 'react';
import { connect } from 'react-redux';

class Posts extends Component {
    constructor () {
        super()
    
    }

    _datatables() {

        // console.log(this.el);
        // this.$el = $(this.el)
        
        $('#company-table').DataTable(
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
    
                    $('#company-table').removeClass('invisible');
                    
                },  
                // lengthMenu: [[20, 50, 100, 200], [20, 50, 100, 200]],
                stateSave: true,
                stateDuration: -1,
                processing: true,
                serverSide: true,
                ajax: 'ajax/posts',
                columns: [
                    { data: "id", defaultContent: "-" },
                    { data: "fullname", defaultContent: "-" },
                    { data: "taken_date", defaultContent: "-" },
                    { data: "nationality", defaultContent: "-" }
                ]
            }
        )

    }

    componentDidMount() {
        
        
        this._datatables();

    }

    render () {
    
        return (
            <div className='container-fluid py-4'>
                <table id="company-table" width="100%" className="table table-bordered table-hover middle invisible" ref={el => this.el = el}>
                    <thead className="thead-dark">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Taken Date</th>
                            <th>Nationality</th>
                        </tr>
                    </thead>
                    <tfoot className="thead-dark">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Taken Date</th>
                            <th>Nationality</th>
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
)(Posts);