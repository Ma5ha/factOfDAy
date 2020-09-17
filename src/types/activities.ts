export interface activitiesResponse {
  activities?: ActivitiesEntity[] | null;
}
export interface ActivitiesEntity {
  activity_id: number;
  owner_type: string;
  owner_id: string;
  owner_value: string;
  action: string;
  trackable_id: number;
  trackable_type: string;
  trackable_value: string;
  message: string;
}
