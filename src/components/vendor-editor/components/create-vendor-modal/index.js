import React from 'react';
import CreateVendorModal from '../../../common/vendor/create-vendor-modal';
import vendorEditorStateInstance from '../../state';


const VendorEditorCreateVendorModal = () => {
  return <CreateVendorModal btnClasses={ 'btn btn-outline-success ml-auto' }
                            onSuccess={ () => vendorEditorStateInstance.reloadDataSet() }
  />
};

export default VendorEditorCreateVendorModal;
