import Link from 'next/link';
import Alert from '@/components/Alert';
import Banner from '@/components/Banner';
import notFoundBanner from '../../public/images/404.png';

export const metadata = {
  title: 'Not Found',
};

export default function NotFound() {
  return (
    <div className="flex-1">
      <Banner title="404 - Not found!" subTitle="This page does not exist" image={notFoundBanner} />

      <div className="mt-12">
        <Alert type="danger">
          You have either been linked to a non existing page or have reached a page that is yet to
          be built. Either way, you should head <Link href="/">home</Link>
        </Alert>
      </div>
    </div>
  );
}
