import React, { forwardRef, useImperativeHandle, useRef, ReactNode } from 'react';
import { BottomSheetModal, BottomSheetView, BottomSheetModalProvider } from '@gorhom/bottom-sheet';

interface BottomSheetProps {
  children: ReactNode;
  snapPoints: string[];
}
export interface BottomSheetRef {
  present: () => void;
  close: () => void;
}
const CustomBottomSheet = forwardRef<BottomSheetRef, BottomSheetProps>(({ children, snapPoints }, ref) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  useImperativeHandle(ref, () => ({
    present: () => {
      bottomSheetModalRef.current?.present();
    },
    close: () => {
      bottomSheetModalRef.current?.close();
    }
  }));
  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        snapPoints={snapPoints}>
        <BottomSheetView>
          {children}
        </BottomSheetView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
});
export default CustomBottomSheet;
