import React from 'react';
import { Formik, Form, Field } from 'formik';
import { createData, updateData } from '../../src/api';

const FormComponent = ({ currentData, refreshData, onClose }) => {

    const initialValues = {
        name: currentData?.name || '',
        address: currentData?.address || '',
        city: currentData?.city || '',
        country: currentData?.country || '',
        orgainer: currentData?.organized_by?.name || '',  
        description: currentData?.description || '',
        state: currentData?.state || '',
        start_date: currentData?.start_date || '',
        end_date: currentData?.end_date || '',
        start_time: currentData?.start_time || '',
        end_time: currentData?.end_time || '',
    };
    console.log(currentData, "currentData");

    const handleSubmit = async (values) => {
        try {
            if (currentData) {
                await updateData(currentData.id, values);
            } else {
                await createData(values);
            }
            refreshData();
            onClose();
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {() => (
                <Form>
                    <h1>{currentData ? 'Update Product' : 'Create New Product'}</h1>
                    <div className="form-group">
                        <label>Name</label>
                        <Field name="name" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <Field name="address" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>City</label>
                        <Field name="city" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Country</label>
                        <Field name="country" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Organizer</label>
                        <Field name="orgainer" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <Field name="description" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>State</label>
                        <Field name="state" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Start Date</label>
                        <Field name="start_date" type="date" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>End Date</label>
                        <Field name="end_date" type="date" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Start Time</label>
                        <Field name="start_time" type="time" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>End Time</label>
                        <Field name="end_time" type="time" className="form-control" />
                    </div>
                    <button type="submit" className="btn m-2  btn-primary">
                        {currentData ? 'Update' : 'Create'}
                    </button>
                    <button type="button" className="btn  btn-secondary" onClick={onClose}>
                        Cancel
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default FormComponent;
