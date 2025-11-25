import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { sendLeadEmail, isEmailConfigured } from '../../services/emailService';

/**
 * Submits lead information to the backend API and sends email
 * @param {Object} leadData - The lead information from the form
 * @returns {Promise<Object>} Response with lead confirmation
 */
export const submitLead = createAsyncThunk(
  'leads/submit',
  async (leadData, { rejectWithValue }) => {
    try {
      const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';
      
      // Submit to backend API
      const response = await fetch(`${apiUrl}/leads`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadData),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Failed to submit lead');
      }

      // Send email via EmailJS (if configured)
      let emailResult = { success: false };
      if (isEmailConfigured()) {
        emailResult = await sendLeadEmail(leadData);
        console.log('EmailJS result:', emailResult);
      } else {
        console.log('⚠️ EmailJS not configured - skipping frontend email');
      }
      
      return {
        ...result.data,
        emailSentViaEmailJS: emailResult.success,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const leadsSlice = createSlice({
  name: 'leads',
  initialState: {
    leads: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    submitSuccess: false,
  },
  reducers: {
    resetSubmitStatus: (state) => {
      state.submitSuccess = false;
      state.error = null;
      state.status = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitLead.pending, (state) => {
        state.status = 'loading';
        state.submitSuccess = false;
        state.error = null;
      })
      .addCase(submitLead.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.submitSuccess = true;
        state.leads.push(action.payload);
      })
      .addCase(submitLead.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { resetSubmitStatus } = leadsSlice.actions;
export default leadsSlice.reducer;
