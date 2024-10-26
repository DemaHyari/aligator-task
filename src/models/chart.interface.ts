import { Engagement } from "./engagement.interface";
import { Platform } from "./platform.interface";
import { Post } from "./post.interface";
import { Reach } from "./reach.interface";

export interface Chart {
  startDate: number,
  endDate: number,
  data: Platform[] | Engagement[] | Reach[] | Post[]
}