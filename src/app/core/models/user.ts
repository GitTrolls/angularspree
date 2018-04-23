/**
 * User model
 * Basically mimics the UserSerializer in the API.
 */

import { Address } from './address';

export interface Authenticate {
  name?: string;
  email: string;
  password: string;
}
export class User {
  id: string;
  email: string;
  created_at: string;
  updated_at: string;
  bill_address_id: string;
  ship_address_id: string;
  payment_sources: [any];
  bill_address: [Address];
  ship_address: [Address];
  error?: {error: string, errors: Object};
}
