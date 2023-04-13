import dayjs from 'dayjs'

export default function Date({ dateString = '' }) {
  return (
    <time dateTime={dateString}>
      {dayjs(dateString).format('YYYY年MM月DD日')}
    </time>
  )
}
