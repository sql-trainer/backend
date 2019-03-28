import * as env from 'dotenv';
env.config();

import './databases/mysql_airo';
import './databases/mongo_airo';
import './tests/open';
