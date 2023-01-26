import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ChannelSchema } from '../models/Channel';
import { ResourceSchema } from '../models/Resource';
import { RunCardSchema } from '../models/RunCard';
import { RunGroupSchema } from '../models/RunGroup';
import { StationSchema } from '../models/Station';
import { ValueSchema } from '../models/Value'
import { ZoneSchema } from '../models/Zone';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  RunGroup = mongoose.model('RunGroup', RunGroupSchema);
  RunCard = mongoose.model('RunCard', RunCardSchema);
  Channel = mongoose.model('Channel', ChannelSchema);
  Resource = mongoose.model('Resource', ResourceSchema);
  Station = mongoose.model('Station', StationSchema);
  Zone = mongoose.model('Zone', ZoneSchema);

}

export const dbContext = new DbContext()
