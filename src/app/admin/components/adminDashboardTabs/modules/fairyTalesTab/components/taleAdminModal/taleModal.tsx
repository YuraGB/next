'use client'
import React, { memo } from 'react'
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/modal'
import { Button } from '@nextui-org/button'
import { useTaleModal } from '@/app/admin/components/adminDashboardTabs/modules/fairyTalesTab/components/taleAdminModal/useTaleModal'
import { Tale } from '.prisma/client'

type propsInit = {
  initialValues: Tale | null
}
const TaleModal = ({
  isOpen = false,
  onClose = () => {},
  initialValues = null,
}: { isOpen: boolean; onClose: () => void } & propsInit) => {
  const { handleSubmit, onSubmit, formFields } = useTaleModal(initialValues)

  return (
    <Modal size={'5xl'} isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Add a new tale
            </ModalHeader>
            <ModalBody>
              <form
                className={'bg-white p-4 mt-3 w-full max-w-xl flex flex-wrap'}
                aria-label={'registration form'}
                onSubmit={handleSubmit(onSubmit)}
              >
                {formFields}
                <Button
                  variant={'flat'}
                  color={'primary'}
                  fullWidth={true}
                  className={'mb-4'}
                  type={'submit'}
                >
                  Create a fairy tale
                </Button>
              </form>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export default memo(TaleModal)
