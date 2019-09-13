/** Player History
 * This is history of all the team a player has been apart of.
 * Team - Name of the team.
 * Local Pub - The home pub for the team.
 * Year - Year player palyed on the team.
 * */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';
import { connect } from 'react-redux';
import { deleteHistory } from '../../actions/profile';

const History = ({ history, deleteHistory }) => {
    const historys = history.map(exp => (
        <tr key={exp._id}>
            <td>{exp.company}</td>
            <td className="hide-sm">{exp.title}</td>
            <td>
                <Moment format="YYYY/MM/DD">{moment.utc(exp.from)}</Moment> -{' '}
                {exp.to === null ? (
                    ' Now'
                ) : (
                        <Moment format="YYYY/MM/DD">{moment.utc(exp.to)}</Moment>
                    )}
            </td>
            <td>
                <button
                    onClick={() => deleteHistory(exp._id)}
                    className="btn btn-danger"
                >
                    Delete
        </button>
            </td>
        </tr>
    ));

    return (
        <Fragment>
            <h2 className="my-2">History</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Team</th>
                        <th className="hide-sm">Local</th>
                        <th className="hide-sm">Years</th>
                        <th />
                    </tr>
                </thead>
                <tbody>{historys}</tbody>
            </table>
        </Fragment>
    );
};

History.propTypes = {
    history: PropTypes.array.isRequired,
    deleteHistory: PropTypes.func.isRequired
};

export default connect(
    null,
    { deleteHistory }
)(History);
