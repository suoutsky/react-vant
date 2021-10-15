import React from 'react';
import type { FormProps as RcFormProps, FormInstance as RcFormInstance } from 'rc-field-form';
import type { FieldProps as RcFieldProps } from 'rc-field-form/lib/Field';
import type { Meta } from 'rc-field-form/lib/interface';
import type { BaseTypeProps } from '../utils';
import type { CellGroupProps } from '../cell/PropsType';
import { FieldProps } from '../field/PropsType';

export type FormLayout = 'vertical' | 'horizontal';
export interface FormProps extends RcFormProps, Omit<CellGroupProps, 'title'>, BaseTypeProps {
  layout?: FormLayout;
  colon?: boolean;
  footer?: React.ReactNode;
}

export type RenderChildren<Values = unknown> = (form: RcFormInstance<Values>) => React.ReactNode;
type ChildrenType<Values = unknown> = RenderChildren<Values> | React.ReactNode;

export type FormInstance = RcFormInstance;

export type MemoInputProps = {
  value: unknown;
  update: number;
  children: React.ReactNode;
} & Record<string, unknown>;

export type FormItemProps = RcFieldProps &
  Pick<
    FieldProps,
    | 'style'
    | 'className'
    | 'tooltip'
    | 'intro'
    | 'colon'
    | 'labelWidth'
    | 'labelAlign'
    | 'labelClass'
    | 'onClick'
  > & {
    label?: string;
    required?: boolean;
    noStyle?: boolean;
    disabled?: boolean;
    /** 自定义item，此时不会渲染内置的field */
    customField?: boolean;
    children: ChildrenType;
  };

export type FormItemLayoutProps = Pick<
  FormItemProps,
  | 'required'
  | 'disabled'
  | 'label'
  | 'style'
  | 'className'
  | 'tooltip'
  | 'intro'
  | 'colon'
  | 'labelWidth'
  | 'labelAlign'
  | 'labelClass'
> & {
  onClick?: (e?: React.MouseEvent) => void;
  htmlFor?: string;
  meta?: Meta;
  layout?: FormLayout;
  /** @private */
  isFieldChildren?: boolean;
};
