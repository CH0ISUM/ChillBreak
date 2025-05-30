// filepath: c:\Users\deryd\Desktop\WORKSPACE\Personal Projects\ChillBreak\windows\ChillBreak\App.cpp

#include "pch.h"
#include "App.h"
#include "MainPage.h"

using namespace ChillBreak;
using namespace Windows::ApplicationModel::Core;
using namespace Windows::ApplicationModel::Activation;

void App::OnLaunched(LaunchActivatedEventArgs^ e)
{
    auto rootFrame = dynamic_cast<Windows::UI::Xaml::Controls::Frame^>(Windows::UI::Xaml::Window::Current->Content);

    if (rootFrame == nullptr)
    {
        rootFrame = ref new Windows::UI::Xaml::Controls::Frame();
        Windows::UI::Xaml::Window::Current->Content = rootFrame;
    }

    if (rootFrame->Content == nullptr)
    {
        rootFrame->Navigate(MainPage::typeid);
    }

    Windows::UI::Xaml::Window::Current->Activate();
}