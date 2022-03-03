import React from "react";
import { IDetail, IUser } from "@/libs/models/User";
import { useTheme } from "@/libs/theme";
import InputField, { InputFieldType } from "../../InputField";
import logger from "@/libs/logger";

type ItemProps = {
  isEdit: boolean;
  data: IDetail;
  onItemUpdate: (fieldName: string) => (val) => void;
};

const Item = ({ data, onItemUpdate }: ItemProps) => {
  const theme = useTheme();

  return (
    <div className="pb-10">
      <div className="flex items-center">
        {data.icon && (
          <div
            className={
              "mr-2 text-xl rounded-full p-2 text-white " + theme.primary.bgIcon
            }
          >
            <InputField
              type={InputFieldType.ICON_FIELD}
              value={data.icon}
              onInputChange={onItemUpdate("icon")}
            />
          </div>
        )}
        {data.heading && (
          <div className={"text-xl font-bold " + theme.color2}>
            <InputField
              value={data.heading}
              onInputChange={onItemUpdate("heading")}
            />
          </div>
        )}
      </div>
      <div className="pl-4">
        {data.description && (
          <div className="text-base">
            <InputField
              value={data.description}
              type={InputFieldType.AREA_FIELD}
              onInputChange={onItemUpdate("description")}
            />
          </div>
        )}
        {data.detail?.map((detail, idxDetail) => (
          <div key={idxDetail}>
            <div className="text-lg font-bold pb-2">
              <InputField
                value={detail.heading}
                onInputChange={onItemUpdate(`detail.${idxDetail}.heading`)}
              />
            </div>
            <div className="pl-4">
              {detail?.data.map((subItem, idxSubItem) => (
                <div key={idxSubItem} className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="text-md font-bold">
                      <InputField
                        value={subItem.subheading}
                        onInputChange={onItemUpdate(
                          `detail.${idxDetail}.data.${idxSubItem}.subheading`
                        )}
                      />
                    </div>
                    <div className="text-sm">
                      <InputField
                        value={subItem.time}
                        onInputChange={onItemUpdate(
                          `detail.${idxDetail}.data.${idxSubItem}.time`
                        )}
                      />
                    </div>
                  </div>
                  <div className="pl-4 w-4/5">
                    <ul className="list-disc px-4">
                      {subItem.content.map((text, idxSubItemContent) => (
                        <li
                          key={idxSubItemContent}
                          className="px-2 py-1 text-base"
                        >
                          <InputField
                            value={text}
                            onInputChange={onItemUpdate(
                              `detail.${idxDetail}.data.${idxSubItem}.content.${idxSubItemContent}`
                            )}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        <button
          onClick={() => {
            onItemUpdate(`detail.${data.detail.length}`)({
              subheading: "Heading ...",
              time: "time",
              data: [],
            });
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

type DetailProps = {
  isEdit?: boolean;
  onUpdateUserInfo?: (fieldName: string) => (e) => void;
  user: IUser;
};

const ProfileDetail = ({
  user,
  isEdit = false,
  onUpdateUserInfo,
}: DetailProps) => {
  const handleDetailUpdate = (idx: number) => (fieldName: string) => (val) => {
    logger.info(`updating profile-detail ${fieldName} ${val}`);
    onUpdateUserInfo(`detail.${idx}.${fieldName}`)(val);
  };
  return (
    <div className="pt-8 px-8">
      {user?.detail?.map((detail, idx) => (
        <Item
          isEdit={isEdit}
          key={idx}
          data={detail}
          onItemUpdate={handleDetailUpdate(idx)}
        />
      ))}
    </div>
  );
};

export default ProfileDetail;
