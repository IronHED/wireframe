/**
 * Players Notable Results
 *  */import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';
import { connect } from 'react-redux';
import { deleteResults } from '../../actions/profile';

const Results = ({ results, deleteResults }) => {
    const resultss = results.map(edu => (
        <tr key={edu._id}>
            <td>{edu.school}</td>
            <td className="hide-sm">{edu.degree}</td>
            <td>
                <Moment format="YYYY/MM/DD">{moment.utc(edu.from)}</Moment> -{' '}
                {edu.to === null ? (
                    ' Now'
                ) : (
                        <Moment format="YYYY/MM/DD">{moment.utc(edu.to)}</Moment>
                    )}
            </td>
            <td>
                <button
                    onClick={() => deleteResults(edu._id)}
                    className="btn btn-danger"
                >
                    Delete
        </button>
            </td>
        </tr>
    ));

    return (
        <Fragment>
            <h2 className="my-2">Results</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Tournament</th>
                        <th className="hide-sm">Team</th>
                        <th className="hide-sm">Place</th>
                        <th />
                    </tr>
                </thead>
                <tbody>{resultss}</tbody>
            </table>
        </Fragment>
    );
};

Results.propTypes = {
    results: PropTypes.array.isRequired,
    deleteResults: PropTypes.func.isRequired
};

export default connect(
    null,
    { deleteResults }
)(Results);
