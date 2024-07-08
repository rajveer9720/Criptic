'use client';

import Button from '@/components/ui/button';
import Feeds from '@/components/search/feeds';
import { useDrawer } from '@/components/drawer-views/context';
import { Filters, GridSwitcher, SortList } from '@/components/search/filters';
import { OptionIcon } from '@/components/icons/option';

export default function Marathon() {
  const { openDrawer } = useDrawer();
  return (
    <>
        <h1>Testing Marathon //:</h1>
    </>
  );
}
