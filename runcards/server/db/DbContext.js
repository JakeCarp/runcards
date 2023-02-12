import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ResourceGuidelineListchema } from "../models/ResouceGuidelineList";
import { ResourceGuidelineSchema } from "../models/ResourceGuideline";
import { RunCardSchema } from '../models/RunCard';
import { RunGroupSchema } from '../models/RunGroup';
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  RunGroup = mongoose.model('RunGroup', RunGroupSchema);
  RunCard = mongoose.model('RunCard', RunCardSchema);
  ResourceGuideline = mongoose.model('ResourceGuideline', ResourceGuidelineSchema);

  ResourceGuidelineList = mongoose.model('ResourceGuidelineList', ResourceGuidelineListchema);
}

export const dbContext = new DbContext()
