import { formatDistance, parseISO, differenceInDays, format } from 'date-fns';
import { enUS, arSA } from 'date-fns/locale';
import i18next from 'i18next';

export const formatDate = (dateStr) => {
  let lng = i18next.language
  const date = parseISO(dateStr);
  const locale = lng === 'ar' ? arSA : enUS;

  return format(date, 'd MMMM, yyyy', { locale });
};

// We want to make this function work for both Date objects and strings (which come from Supabase)
export const subtractDates = (dateStr1, dateStr2) =>
  differenceInDays(parseISO(String(dateStr1)), parseISO(String(dateStr2)));

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  })
    .replace('about ', '')
    .replace('in', 'In');

// Supabase needs an ISO date string. However, that string will be different on every render because the MS or SEC have changed, which isn't good. So we use this trick to remove any time
export const getToday = function (options = {}) {
  const today = new Date();

  // This is necessary to compare with created_at from Supabase, because it it not at 0.0.0.0, so we need to set the date to be END of the day when we compare it with earlier dates
  if (options?.end)
    // Set to the last second of the day
    today.setUTCHours(23, 59, 59, 999);
  else today.setUTCHours(0, 0, 0, 0);
  return today.toISOString();
};

export const formatCurrency = (value) =>
  new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(
    value
  );

export const extractVideoLink = (videoLink) => {
  let embedLink;

  // التحقق مما إذا كان الرابط من YouTube (تنسيق عادي أو مختصر)
  if (videoLink?.includes('youtube.com/watch')) {
    // استخراج الـ video ID من الرابط العادي
    const urlParams = new URLSearchParams(new URL(videoLink).search);
    const videoId = urlParams.get('v');

    // إنشاء رابط التضمين
    embedLink = `https://www.youtube.com/embed/${videoId}`;
  } else if (videoLink?.includes('youtu.be/')) {
    // استخراج الـ video ID من الرابط المختصر
    const videoId = new URL(videoLink).pathname.split('/')[1];

    // إنشاء رابط التضمين
    embedLink = `https://www.youtube.com/embed/${videoId}`;
  } else {
    // إذا لم يكن الرابط من YouTube، استخدم الرابط كما هو
    embedLink = videoLink;
  }

  return embedLink;
};
