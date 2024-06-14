import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ResourceGuidelineListchema } from "../models/ResouceGuidelineList";
import { ResourceGuidelineSchema } from "../models/ResourceGuideline";
import { ChannelSchema } from '../models/Channel';
import { ResourceSchema } from '../models/Resource';
import { RunCardSchema } from '../models/RunCard';
import { RunGroupSchema } from '../models/RunGroup';
import { StationSchema } from '../models/Station';
import { ValueSchema } from '../models/Value'
import { ZoneSchema } from '../models/Zone';
import { AlertsenseSchema } from '../models/Alertsense';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  RunGroup = mongoose.model('RunGroup', RunGroupSchema);
  RunCard = mongoose.model('RunCard', RunCardSchema);
  ResourceGuideline = mongoose.model('ResourceGuideline', ResourceGuidelineSchema);

  ResourceGuidelineList = mongoose.model('ResourceGuidelineList', ResourceGuidelineListchema);
  Channel = mongoose.model('Channel', ChannelSchema);
  Resource = mongoose.model('Resource', ResourceSchema);
  Station = mongoose.model('Station', StationSchema);
  Zone = mongoose.model('Zone', ZoneSchema);

  Alertsense = mongoose.model('Alertsense', AlertsenseSchema)

}

export const dbContext = new DbContext()
