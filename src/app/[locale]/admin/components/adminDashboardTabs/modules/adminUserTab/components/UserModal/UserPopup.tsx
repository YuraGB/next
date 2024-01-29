import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/modal'
import { FormattedMessage } from 'react-intl'
import { Button } from '@nextui-org/button'
import React, { memo } from 'react'
import { User } from '@/app/[locale]/admin/components/adminDashboardTabs/modules/adminUserTab/model/User'
import { useUserPopup } from '@/app/[locale]/admin/components/adminDashboardTabs/modules/adminUserTab/components/UserModal/useUserPopup'

const UserPopup = ({
  isOpen = false,
  onClose = () => {},
  initialValues = null,
}: {
  isOpen: boolean
  onClose: () => void
  initialValues: User | null
}) => {
  const { handleSubmit, onSubmit, formFields } = useUserPopup(
    initialValues,
    onClose
  )

  return (
    <Modal
      size={'5xl'}
      isOpen={isOpen}
      onClose={onClose}
      className={'max-h-full overflow-auto'}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {initialValues ? (
                <FormattedMessage
                  id={'modal.admin.editUser'}
                  defaultMessage={'Edit user'}
                />
              ) : (
                <FormattedMessage
                  id={'modal.admin.addUser'}
                  defaultMessage={'Add user'}
                />
              )}
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
                  {initialValues ? 'Edit the user' : 'Create a new user'}
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

export default memo(UserPopup)