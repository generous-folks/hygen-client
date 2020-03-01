import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormGroup from '@material-ui/core/FormGroup';
import Select from '@material-ui/core/Select';
import { useClipboard } from '../hooks/useClipboard.hook';

const existingVars = ['customerCode', 'tenantCode', 'prodDnsZone'];

export const SelectVars = () => {
  const [varItem, setVarItem] = React.useState('');

  const [copiedText] = useClipboard(varItem);

  const handleChange = e => {
    setVarItem(e.target.value);
  };

  return (
    <>
      <p>{copiedText}</p>
      <FormGroup>
        <InputLabel>Existing Vars</InputLabel>
        <Select value={varItem} onChange={handleChange}>
          {existingVars.map(varEl => (
            <MenuItem key={varEl} value={varEl}>
              {varEl}
            </MenuItem>
          ))}
        </Select>
      </FormGroup>
    </>
  );
};
