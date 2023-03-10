// 获取指定日期是所在年份的第几天
import dayOfYear from './obtain/dayOfYear';

// 获取两个日期之间以天为单位的差值
import getDayDiff from './obtain/getDayDiff';

// 判断指定日期是不是今天
import isToday from './judge/isToday';

// 判断指定日期是不是n天前
import isYesterday from './judge/isYesterday';

// 判断指定日期是不是n天后
import isTomorrow from './judge/isTomorrow';

// 判断是否达到指定时间
import isScheduled from './judge/isScheduled';

export { dayOfYear, getDayDiff, isToday, isYesterday, isTomorrow, isScheduled };
